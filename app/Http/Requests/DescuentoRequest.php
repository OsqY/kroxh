<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DescuentoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'nombre' => 'required|max:255|string',
            'descripcion' => 'nullable|string',
            'valor_porcentaje' => 'required|integer|min:0|max:100',
            'fecha_inicio' => 'required|date|after_or_equal:today',
            'fecha_fin' => 'required|date|after:fecha_inicio',
            'activo' => 'boolean',
            'minimo_compra' => 'nullable|numeric|min:0',
            'codigo' => 'nullable|string|max:50|',
        ];

        if ($this->isMethod('put') || $this->isMethod('patch')) {
            $rules['codigo'] = [
                'nullable',
                'string',
                'max:50',
                Rule::unique('descuentos', 'codigo')->ignore($this->route('descuento'))
            ];
        } else {
            $rules['codigo'] = [
                'nullable',
                'string',
                'max:50',
                'unique:descuentos,codigo'
            ];
        }
        return $rules;
    }

    public function messages(): array
    {
        return [
            'nombre.required' => 'El nombre del descuento es obligatorio',
            'valor_porcentaje.required' => 'El porcentaje de descuento es obligatorio',
            'valor_porcentaje.min' => 'El porcentaje debe ser al menos 0%',
            'valor_porcentaje.max' => 'El porcentaje no puede ser mayor a 100%',
            'fecha_inicio.after_or_equal' => 'La fecha de inicio debe ser hoy o una fecha futura',
            'fecha_fin.after' => 'La fecha de fin debe ser posterior a la fecha de inicio',
            'codigo.unique' => 'Este código de descuento ya está en uso'
        ];
    }
}

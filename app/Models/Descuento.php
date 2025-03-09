<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Descuento extends Model
{
    protected $fillable = [
        'nombre',
        'descripcion',
        'valor_porcentaje',
        'fecha_inicio',
        'fecha_fin',
        'activo',
        'minimo_compra',
        'codigo',
    ];

    public function prendas()
    {
        return $this->belongsToMany(Prenda::class, 'descuento_prendas')
            ->withTimestamps();
    }

    public function tipoProductos()
    {
        return $this->belongsToMany(TipoProducto::class, 'descuento_categorias')
            ->withTimestamps();
    }

    public function isActive(): bool
    {
        $ahora = now();

        return $this->activo &&
            $ahora->greaterThanOrEqualTo($this->fecha_inicio) &&
            $ahora->lessThanOrEqualTo($this->fecha_fin);
    }
}

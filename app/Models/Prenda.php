<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Prenda extends Model
{
    protected $fillable = [
        'nombre',
        'codigo',
        'descripcion',
        'precio_base',
        'tipo_producto_id',
        'talla_id',
        'color_id',
    ];

    public function tipoProducto(): BelongsTo
    {
        return $this->belongsTo(TipoProducto::class);
    }

    public function talla(): BelongsTo
    {
        return $this->belongsTo(Talla::class);
    }

    public function color(): BelongsTo
    {
        return $this->belongsTo(Color::class);
    }

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $ultimaPrenda = self::latest()->first();

            if ($ultimaPrenda) {
                $ultimoCodigo = $ultimaPrenda->codigo;
                $numero = intval(substr($ultimoCodigo, 3)) + 1;
            } else {
                $numero = 1;
            }
            $model->codigo = "CP-{$numero}";
        });
    }
}

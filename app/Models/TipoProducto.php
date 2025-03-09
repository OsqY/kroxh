<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class TipoProducto extends Model
{
    use HasFactory;

    protected $fillable = ['nombre'];

    public function descuentos(): BelongsToMany
    {
        return $this->belongsToMany(Descuento::class, 'descuento_categorias')
            ->withTimestamps();
    }
}

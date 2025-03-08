<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use function Laravel\Prompts\alert;

class InventarioPrenda extends Model
{
    protected $fillable = [
        'cantidad',
        'prenda_id',
        'alerta_id'
    ];

    public function prenda(): BelongsTo
    {
        return $this->belongsTo(Prenda::class);
    }

    public function alerta(): BelongsTo
    {
        return $this->belongsTo(Alerta::class);
    }

    protected static function boot()
    {
        parent::boot();

        $alerta = Alerta::where('nombre', 'Buen estado')->first();

        if (!$alerta) throw new \Exception('No existe alerta con nombre "Buen estado". Por favor, cree una.');

        static::creating(function ($model) {
            $model->alerta_id = $alerta->id;
        });
    }
}

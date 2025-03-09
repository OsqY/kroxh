<?php

use App\Models\Descuento;
use App\Models\Prenda;

class DiscountService
{
    public function calculatePriceWithDiscount(Prenda $prenda)
    {
        $basePrice = $prenda->precio_base;
        $bestDiscount = $this->getBetterDiscount($prenda);

        if (!$bestDiscount) return $basePrice;

        $discountAmount = $basePrice * ($bestDiscount->valor_porcentaje / 100);
        return max(0, $basePrice - $discountAmount);
    }

    private function getBetterDiscount(Prenda $prenda)
    {
        $descuentoPrendas = $prenda->descuentos()
            ->where('activo', true)
            ->where('fecha_inicio', '<=', now())
            ->where('fecha_fin', '>=', now())
            ->get();

        $descuentoCategorias = Descuento::whereHas('tipoProductos', function ($query) use ($prenda) {
            $query->where('tipo_producto_id', $prenda->tipo_producto_id);
        })
            ->where('activo', true)
            ->where('fecha_inicio', '<=', now())
            ->where('fecha_fin', '>=', now())
            ->get();

        $todosDescuentos = $descuentoPrendas->concat($descuentoCategorias);

        if ($todosDescuentos->isEmpty()) {
            return null;
        }

        return $todosDescuentos->sortByDesc(function ($descuento) use ($prenda) {
            return $prenda->precio * ($descuento->valor / 100);
        })->first();
    }
}

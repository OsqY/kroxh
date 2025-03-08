<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\Prenda;
use App\Models\Talla;
use App\Models\TipoProducto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $prendas = Prenda::with(['tipoProducto:id,nombre',
            'talla:id,nombre', 'color:id,nombre,codigo_hexadecimal'])
            ->orderBy('id', 'desc')
            ->get();

        return Inertia::render('Prendas/Index', [
            'prendas' => $prendas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tiposProductos = TipoProducto::all();
        $tallas = Talla::all();
        $colores = Color::all();

        return Inertia::render('Prendas/Create', [
            'tipoProductos' => $tiposProductos,
            'tallas' => $tallas,
            'colores' => $colores
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|unique:prendas|max:255',
            'descripcion' => 'required|unique:prendas|max:255',
            'precio_base' => 'required|numeric|min:0',
            'tipo_producto_id' => 'required|exists:tipo_productos,id',
            'talla_id' => 'required|exists:tallas,id',
            'color_id' => 'required|exists:colores,id'
        ]);

        Prenda::create($validated);

        return redirect()->route('prendas.index')
            ->with('success', 'Prenda creada correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(Prenda $prenda)
    {
        $prenda->load(['tipoProducto', 'talla', 'color']);

        return Inertia::render('Prendas/Show', [
            'prenda' => $prenda
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Prenda $prenda)
    {
        $tipoProductos = TipoProducto::all();
        $tallas = Talla::all();
        $colores = Color::all();

        return Inertia::render('Prendas/Edit', [
            'tipoProductos' => $tipoProductos,
            'tallas' => $tallas,
            'colores' => $colores,
            'prenda' => $prenda
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Prenda $prenda)
    {

        $validated = $request->validate([
            'nombre' => 'required|max:255|unique:prendas,nombre,' . $prenda->id,
            'descripcion' => 'required|max:255|unique:prendas,descripcion,' . $prenda->id,
            'precio_base' => 'required|numeric|min:0',
            'tipo_producto_id' => 'required|exists:tipo_productos,id',
            'talla_id' => 'required|exists:tallas,id',
            'color_id' => 'required|exists:colores,id'
        ]);

        $prenda->update($validated);

        return redirect()->route('prendas.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Prenda $prenda)
    {
        $prenda->delete();

        return redirect()->route('prendas.index')
            ->with('success', 'Prenda eliminada exitosamente');
    }
}

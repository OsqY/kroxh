<?php

namespace App\Http\Controllers;

use App\Models\TipoProducto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TipoProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tipoProductos = TipoProducto::all();

        return Inertia::render(
            'TipoProducto/Index', [
            'tipoProductos' => $tipoProductos
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('TipoProducto/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|unique:tipo_productos|max:255',
        ]);

        TipoProducto::create($validated);

        return redirect()->route('tipo-productos.index')
            ->with('success', 'Tipo de Producto creado correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(TipoProducto $tipoProducto)
    {
        return Inertia::render('TipoProducto/Show', [
            'tipoProducto' => $tipoProducto
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TipoProducto $tipoProducto)
    {
        return Inertia::render('TipoProducto/Edit', [
            'tipoProducto' => $tipoProducto
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TipoProducto $tipoProducto)
    {
        $validated = $request->validate([
            'nombre' => 'required|unique:tipo_productos|max:255',
        ]);

        $tipoProducto->update($validated);
        return redirect()->route('tipo-productos.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TipoProducto $tipoProducto)
    {
        $tipoProducto->delete();
        return redirect()->route('tipo-productos.index')
            ->with('success', 'Tipo de Producto eliminado correctamente');
    }
}

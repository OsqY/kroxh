<?php

namespace App\Http\Controllers;

use App\Models\Color;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $colores = Color::all();

        return Inertia::render('Color/Index', [
            'colores' => $colores
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Color/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|unique:colores|max:255',
            'codigo_hexadecimal' => 'required|unique:colores|max:16'
        ]);

        Color::create($validated);

        return redirect()->route('colores.index')
            ->with('success', 'Color creado correctamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(Color $color)
    {
        return Inertia::render('Color/Show', [
            'color' => $color
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Color $color)
    {
        return Inertia::render('Color/Edit', [
            'color' => $color
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Color $color)
    {
        $validated = $request->validate([
            'nombre' => 'required|max:255|unique:colores,nombre,'.$color->id,
            'codigo_hexadecimal' => 'required|max:16|unique:colores,codigo_hexadecimal,'.$color->id
        ]);

        $color->update($validated);

        return redirect()->route('colores.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Color $color)
    {
        $color->delete();

        return redirect()->route('colores.index')
            ->with('success', 'Color eliminado exitosamente');
    }
}

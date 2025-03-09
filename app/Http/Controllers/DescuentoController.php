<?php

namespace App\Http\Controllers;

use App\Http\Requests\DescuentoRequest;
use App\Models\Descuento;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DescuentoController extends Controller
{


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $descuentos = Descuento::all();
        return Inertia::render('Descuentos/Index', [
            'descuentos' => $descuentos
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Descuentos/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DescuentoRequest $request)
    {
        $validated = $request->validated();
        Descuento::create($validated);

        return redirect()->route('descuentos.index')
            ->with('success', 'Descuento creado exitosamente');
    }

    /**
     * Display the specified resource.
     */
    public function show(Descuento $descuento)
    {
        return Inertia::render('Descuentos/Show', [
            'descuento' => $descuento
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Descuento $descuento)
    {
        return Inertia::render('Descuentos/Edit', [
            'descuento' => $descuento
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(DescuentoRequest $request, Descuento $descuento)
    {
        $validated = $request->validated();
        $descuento->update($validated);

        return redirect()->route('descuentos.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Descuento $descuento)
    {
        $descuento->delete();

        return redirect()->route('descuentos.index')
            ->with('success', 'Descuento eliminado exitosamente');
    }
}

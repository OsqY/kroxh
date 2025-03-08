<?php

namespace App\Http\Controllers;

use App\Models\Alerta;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $alertas = Alerta::all();

        return Inertia::render('Alertas/Index', [
            'alertas' => $alertas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Alertas/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre'=>'required|unique:alertas|max:60'
        ]);

        Alerta::create($validated);

        return redirect()->route('alertas.index')
            ->with('success', 'Alerta creada correctamente');
        }

    /**
     * Display the specified resource.
     */
    public function show(Alerta $alerta)
    {
        return Inertia::render('Alertas/Show',[
            'alerta'=>$alerta
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Alerta $alerta)
    {
        return Inertia::render('Alertas/Edit',[
            'alerta'=>$alerta
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Alerta $alerta)
    {
      $validated = $request->validate([
          'nombre'=>'required|max:60|unique:alertas,nombre,'.$alerta->id
      ]);

      $alerta->update($validated);

      return redirect()->route('alertas.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Alerta $alerta)
    {
        $alerta->delete();

        return redirect()->route('alertas.index')
            ->with('sucess', 'Alerta eliminada exitosamente');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('inventario_prendas', function (Blueprint $table) {
            $table->id();
            $table->integer('cantidad');

            $table->foreignId('alerta_id')->constrained('alertas');
            $table->foreignId('prenda_id')->constrained('prendas');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventario_prendas');
    }
};

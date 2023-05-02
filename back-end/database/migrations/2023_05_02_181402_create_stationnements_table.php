<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('stationnements', function (Blueprint $table) {
            $table->id();
            $table->date('dateStat');
            $table->integer('nbrUnit');
            $table->foreignId('user')->constrained('users');
            $table->foreignId('park')->constrained('parkings');
            $table->foreignId('TarifPark')->constrained('tarif_parkings');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stationnements');
    }
};

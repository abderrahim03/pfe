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
        Schema::create('tarif_parkings', function (Blueprint $table) {
            $table->id();
            $table->float('prix');
            $table->foreignId('park')->constrained('parkings');
            $table->timestamps();
        });
    } 

    /** 
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarif_parkings');
    }
};
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TarifParking extends Model
{
    use HasFactory;
    protected $fillable = [
        'prix',
        'park',
        'type',
    ];

    public function parkings()
    {
        return $this->hasMany(Parking::class);
    }
    public function typeTarifs()
    {
        return $this->hasMany(TypeTarif::class);
    }
}

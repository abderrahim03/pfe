<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stationnement extends Model
{
    use HasFactory;

    protected $fillable = [
        'dateStat',
        'nbrUnit',
        'user',
        'park',
        'TarifPark',
    ];
    
    public function parkings()
    {
        return $this->belongsTo(Parking::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function typeTarifs()
    {
        return $this->belongsTo(TypeTarif::class);
    }
}
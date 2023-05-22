<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeTarif extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
    ];

    public function stationnements()
    {
        return $this->hasMany(Stationnements::class);
    }
    public function tarifParks()
    {
        return $this->hasMany(tarifParks::class);
    }
}

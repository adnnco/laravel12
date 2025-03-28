<?php

namespace Database\Factories;

use App\Models\Team;
use App\Models\Tournament;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Team>
 */
class TeamFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'slug' => $this->faker->slug,
            'logo' => 'https://placehold.co/96/'.ltrim($this->faker->hexColor, '#').'/png?text='.urlencode($this->faker->name),
            'tournament_id' => Tournament::inRandomOrder()->first()->id,
            'national' => $this->faker->boolean,
        ];
    }
}

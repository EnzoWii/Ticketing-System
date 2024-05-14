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
        Schema::create('ticket', function (Blueprint $table) {
            $table->id();
            $table->int('ID_number');
            $table->string('category');
            $table->string('issue_type');
            $table->string('assigned_to');
            $table->longText('description');
            $table->string('screenshot')->nullable();
            $table->enum('priority', ['High', 'Low', 'Mid'])->nullable();
            $table->enum('status', ['Open', 'Ongoing', 'Closed'])->nullable();
            $table->string('column')->default('backlog');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ticket');
    }
};

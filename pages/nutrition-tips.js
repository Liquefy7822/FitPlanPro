// pages/nutrition-tips.js
import React from 'react';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';

function NutritionTips() {
  return (
    <div>
      <Header title="Nutrition Tips" />
      <div className="nutrition-tips-content">
        <h1>What to Eat Before Competitions</h1>
        <p>
          Nutrition before competitions is crucial for peak performance. It's
          essential to consume a balanced meal rich in carbohydrates, proteins,
          and healthy fats. Some recommendations include:
        </p>
        <ul>
          <li>Carbohydrate-rich foods like pasta or rice for sustained energy.</li>
          <li>Lean proteins such as chicken or fish to support muscle function.</li>
          <li>Healthy fats like avocados or nuts for overall health.</li>
          <li>Stay hydrated by drinking water or sports drinks.</li>
        </ul>

        <h1>What to Eat Before Training</h1>
        <p>
          Proper nutrition before training helps you perform your best and
          recover quickly. Consider these tips:
        </p>
        <ul>
          <li>Consume a balanced meal 2-3 hours before training.</li>
          <li>Include complex carbohydrates for energy.</li>
          <li>Proteins help with muscle repair and growth.</li>
          <li>Hydrate adequately before and during your workout.</li>
        </ul>

        <h1>Daily Diet Tips</h1>
        <p>
          Maintaining a healthy daily diet is essential for overall well-being.
          Here are some general guidelines:
        </p>
        <ul>
          <li>Eat a variety of fruits and vegetables for vitamins and minerals.</li>
          <li>Include whole grains like oats or brown rice for fiber.</li>
          <li>Lean proteins like lean meats, tofu, or legumes are vital.</li>
          <li>Limit processed foods and sugars for better health.</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default NutritionTips;

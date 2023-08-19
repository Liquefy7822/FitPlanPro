
// pages/goal-setting.js
import React from 'react';
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import GoalSettingForm from '@components/GoalSettingForm';

export default function GoalSetting() {
  return (
    <div className="container">
      <Head>
        <title>Goal Setting - Your Fitness App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Goal Setting" />
        <p className="description">
          Upon sign-up, you can input your fitness goals and other information.
        </p>

        <GoalSettingForm />
      </main>

      <Footer />
    </div>
  );
}

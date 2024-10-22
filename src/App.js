import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Users, Clock, Settings } from 'lucide-react';

const ShiftManagementApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const NavigationBar = () => (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">シフト管理システム</h1>
        <div className="space-x-4">
          <button onClick={() => setActiveTab('dashboard')} className={`px-3 py-2 rounded ${activeTab === 'dashboard' ? 'bg-blue-700' : ''}`}>
            ダッシュボード
          </button>
          <button onClick={() => setActiveTab('calendar')} className={`px-3 py-2 rounded ${activeTab === 'calendar' ? 'bg-blue-700' : ''}`}>
            シフトカレンダー
          </button>
          <button onClick={() => setActiveTab('staff')} className={`px-3 py-2 rounded ${activeTab === 'staff' ? 'bg-blue-700' : ''}`}>
            職員管理
          </button>
          <button onClick={() => setActiveTab('generate')} className={`px-3 py-2 rounded ${activeTab === 'generate' ? 'bg-blue-700' : ''}`}>
            シフト生成
          </button>
        </div>
      </div>
    </nav>
  );

  const Dashboard = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">ダッシュボード</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">今月のシフト状況</h3>
          <p>作成済み: 80%</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">未割当シフト</h3>
          <p className="text-3xl font-bold text-red-500">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">今週の勤務者数</h3>
          <p className="text-3xl font-bold text-green-500">12</p>
        </div>
      </div>
    </div>
  );

  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      days.push(
        <td key={i} className="border p-2 h-24 align-top">
          <span className="block text-sm">{i}</span>
          <div className="text-xs">
            <p>午前: A, B</p>
            <p>午後: -</p>
            <p>夜: C, D</p>
          </div>
        </td>
      );
    }
    return <tr>{days}</tr>;
  };

  const ShiftCalendar = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">シフトカレンダー</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <button className="p-2"><ChevronLeft /></button>
          <h3 className="text-xl font-semibold">2024年11月</h3>
          <button className="p-2"><ChevronRight /></button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">日</th>
              <th className="border p-2">月</th>
              <th className="border p-2">火</th>
              <th className="border p-2">水</th>
              <th className="border p-2">木</th>
              <th className="border p-2">金</th>
              <th className="border p-2">土</th>
            </tr>
          </thead>
          <tbody>
            {generateCalendarDays()}
          </tbody>
        </table>
      </div>
    </div>
  );

  const StaffManagement = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">職員管理</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">名前</th>
              <th className="text-left p-2">タイプ</th>
              <th className="text-left p-2">勤務可能日</th>
              <th className="text-left p-2">アクション</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">山田 太郎</td>
              <td className="p-2">常勤</td>
              <td className="p-2">月-金</td>
              <td className="p-2">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">編集</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">削除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const ShiftGeneration = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">シフト生成</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">期間</label>
            <input type="month" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">シフトタイプ</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>通常シフト</option>
              <option>休日シフト</option>
              <option>特別シフト</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            シフト生成
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationBar />
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'calendar' && <ShiftCalendar />}
      {activeTab === 'staff' && <StaffManagement />}
      {activeTab === 'generate' && <ShiftGeneration />}
    </div>
  );
};

export default ShiftManagementApp;

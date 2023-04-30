import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createClient } from '@supabase/supabase-js'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



const supabaseUrl = 'https://wnatgicqupkotyzxbqaw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduYXRnaWNxdXBrb3R5enhicWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNDI4OTYsImV4cCI6MTk5MzcxODg5Nn0.KObBKMvujQ9arW8kmDui0Wcud3LkRvrjDaG3six5aSo'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getTodos() {
  let { data: todos, error } = await supabase
    .from('todos')
    .select('*')

  for (let todo of todos) {
    let todoList = document.getElementById('todos');
    todoList.innerHTML += `<li>${todo.title}</li>`;
  }
}

getTodos();

async function getReminders() {
  let { data: reminders, error } = await supabase
    .from('reminders')
    .select('*')
  
  for (let remind of reminders) {
    let remindList = document.getElementById('reminders');
    remindList.innerHTML += `<li>${remind.title}</li>`;
    }
}

getReminders();
'use client'

import React from "react";
import { useState, useCallback } from 'react';

export const Input = ({ element }) => {
  return (
    <input
      type={element.type}
      id={element.id}
      className={`text-md block w-full rounded border border-gray-300 bg-transparent 
    px-8 py-3.5 text-gray-900 focus:border-blue-500
 focus:ring-blue-500 dark:text-white
  dark:placeholder-gray-400 ${element.class}`}
      placeholder={element.placeholder}
      required={element.required}
    ></input>
  );
};

export const TextArea = ({ element }) => {
  return (
    <textarea
      className={`text-md block w-full rounded border border-gray-300 bg-transparent px-8 py-3.5 
    text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400`}
      rows={element.rows}
      id={element.id}
      placeholder={element.placeholder}
    ></textarea>
  );
};

export const CheckBox = ({ element, onClick }) => {
  
  return (
    <div className="flex items-center gap-6 bg-gray-900 p-8">
      {!element.isChecked ? (
        <div
        onClick = {onClick}
          className={`border-spacing-3 border ${element.lineColor} p-4`}
        ></div>
      ) : (
        <div
        onClick = {onClick}
          className={`flex border-spacing-3 items-center justify-center p-2
           ${element.bg} ${element.lineColor}`}
        >
          {element.checkedIcon}
        </div>
      )}
      <p className="text-bold">{element.title}</p>
     
    </div>
  );
};

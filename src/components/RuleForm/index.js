import React, { useState } from 'react'
const basicRules = require('../../data/baseRules')
let ruleArray = [];

export const RuleForm = () => {
  const [selectedRule,setSelectedRule] = useState(undefined);

  const addRule = (e) => {
    e.preventDefault();
    if (!selectedRule || ruleArray.includes(basicRules.filter(rule => rule.name === selectedRule))) return null;
    else {
      console.warn(ruleArray);
      ruleArray.push(...basicRules.filter(rule => rule.name === selectedRule));
      console.warn(ruleArray);
    }
  }

  return (
    <>
    <h1>Rules</h1>
    <select name="ruleDropDown" onChange={(e) => setSelectedRule(e.target.value)}> 
      {basicRules.map((rule) => <option key={rule.name} value={rule.name}>{rule.name}</option>)}
        Select Rule
      </select>
      <button onClick = {addRule}>Add Rule</button>
    <h3>Selected Rules:</h3>
    <ul>
      {ruleArray.map((rule) => <li key={rule.name} value={rule.name}>{rule.name}</li>)}
    </ul>
    </>
  )
}

import { useState } from 'react'
import './NewSkillForm.css'

export default function NewSkillForm({ addSkill }) {
    
    const [newSkill, setNewSkill] = useState({
        name: "",
        level: 3
    })

    function handleAddSkill(evt) {
        evt.preventDefault();
       
        addSkill(newSkill)
        setNewSkill({
            name: "",
            level: 3
        });

    }
    console.log(newSkill)

    return (
    <form 
        className={"NewSkillForm"}
        onSubmit={handleAddSkill}
    >
        <label>Skill</label>
            <input 
                name="name" 
                value={newSkill.name}
                onChange={(evt) => {
                    setNewSkill({...newSkill, name: evt.target.value})
                }}
            />
        
        <label>Level</label>
            <select
                name="level"
                value={newSkill.level}
                onChange={(evt) => {
                    setNewSkill({...newSkill, level: parseInt(evt.target.value)})
                }}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        <button type="submit">ADD SKILL</button>
    </form>
    )
}
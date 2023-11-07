import SkillListItem from './SkillListItem.jsx'

export default function SkillList({skills}) {
    
    const skillListItems = skills.map((s, idx) => (<SkillListItem skill={s} key={idx}/>));
    console.log(skillListItems)
    return (
        <ul className={"padding-0"}>{skillListItems}</ul>
    );
}
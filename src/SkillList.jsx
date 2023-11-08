import SkillListItem from './SkillListItem.jsx'

export default function SkillList({skills}) {
    return (
        <ul className={"padding-0"}>
        
            {skills.map((s, idx) => (<SkillListItem skill={s} key={idx} />))}
        
        </ul>
    );
}
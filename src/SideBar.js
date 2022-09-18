import Usuario from './Usuario';
import Sugestoes from './Sugestoes';
import Links from './Links';

export default function SideBar() {
    return (
        <div>
            <h1>Sidebar</h1>
            <Usuario/>
            <Sugestoes/>
            <Links/>
        </div>
    )
}
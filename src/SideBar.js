import Usuario from './Usuario';
import Sugestoes from './Sugestoes';
import Links from './Links';

export default function SideBar() {
    return (
        <div class="sidebar">
            <Usuario/>
            <Sugestoes/>
            <Links/>
        </div>
    )
}
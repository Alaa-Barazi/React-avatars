import Avatar from '../Avatar/Avatar';
import './style.css'
export default function All({ posts }) {
    return (
        <>
            <table className="card-table">
                {posts.length > 0 && posts.map((person) => {
                    return (
                            <tr className="card-cell">
                                <td key={person.login.username} >
                                    <Avatar img={person.picture.large} name={`${person.name.title} ${person.name.first} ${person.name.last}`} />
                                </td>
                            </tr>
                    )
                })
                }
            </table>
        </>
    );
}
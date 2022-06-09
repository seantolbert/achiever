import { db } from "../firebase/config"
import {doc, deleteDoc} from 'firebase/firestore'

export default function AchList({achs}) {
    const handleClick = async (id) => {
        // console.log(id)
        const docRef = doc(db, 'achievements', id)
        await deleteDoc(docRef)
    }

  return (
    <div>
        <ul>
            {achs.map(ach => (
                <li key={ach.id} onClick={() => handleClick(ach.id)}>{ach.title}</li>
            )) }
        </ul>
    </div>
  )
}

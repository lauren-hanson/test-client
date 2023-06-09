import { useState, useEffect } from "react" 

export const TopicList = () => { 

    const [topics, setTopics] = useState([])

    useEffect( 
        () => { 
            fetch(`http://localhost:8088/topics`)
                .then(response => response.json())
                .then((topicArray) => { 
                    setTopics(topicArray)
                })
        }, 
        []
    )

    return ( 
        <article className="topics"> 
        { 
        topics.map((t) => { 
            return <div>{t.type}</div>
        }
        )}
        </article>
    )


}
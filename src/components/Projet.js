import React from 'react';

const Projet = ({projet}) => {
    console.log(projet)
    return (
        <div className='projet'>
            <div className="projet__content">
                {projet.content.map((content, index)=>(
                    <p key={index}>{content}</p>
                ))}
            </div>
            <div className='projet__repo'>
                {projet.repoGit
                    ?<a href={projet.repoGit} target="blan">Repo GitHub</a>
                    :""           
                }
            </div>
            <div className='projet__page'>
                {projet.pageGit
                    ?<a href={projet.pageGit} target="blan">Page web</a>
                    :""           
                }
            </div>
           {projet.image
           ? <div className="projet__images">
           {projet.image.map((image, index)=>(
               <img key={index} src={image} alt="code"/>
           ))}
       </div>
           :""}
        </div>
    );
};

export default Projet;
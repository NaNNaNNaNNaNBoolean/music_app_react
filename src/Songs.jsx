import React from 'react';

export default function SongList() {
    return (
      <>
        <div className="SongList">
          <dl>
            <dt>
            <img src="" alt="where is the love"/>
              Where is the love?</dt>
              <dd> release date :2003 Album: Elephunk </dd>
            <dt>

            </dt>
          </dl>
        </div>
      </>
    );
}




//function Songs({ song }) {
  //   return (
  //     <div>
  //       <Thumbnail song={song} />
  //       <a href={song.url}>
  //         <h3>{song.name}</h3>
  //         <p>{song.info}</p>
  //       </a>
  //       <LikeButton song={song} />
  //     </div>
  //   );
  // }
  // function SongList({ songs, emptyHeading }) {
  //   const count = songs.length;
  //   let heading = emptyHeading;
  //   if (count > 0) {
  //     const noun = count > 1 ? 'Songs' : 'Song';
  //     heading = count + ' ' + noun;
  //   }
  //   return (
  //     <section>
  //       <h2>{heading}</h2>
  //       {songs.map(s =>
  //         <Video key={s.id} video={video} />
  //       )}
  //     </section>
  //   );
  // }

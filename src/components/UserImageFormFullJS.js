import $ from 'jquery'; 
import styles from './UserImageFormFullJS.module.css'

export default function UserImageFormFullJS( uploader ) {

    $("#imageUpload").change(function(){
        UserImageFormFullJS( this );
    });

    $("#profileImage").click(function(e) {
        $("#imageUpload").click();
    });

    if ( uploader.files && uploader.files[0] ){
          $('#profileImage').attr('src', 
             window.URL.createObjectURL(uploader.files[0]) );
    }

    return(
        <>
            <div id={styles.profileContainer}>
                <img id={styles.profileImage} src=""></img>
            </div>
            
            <input
                id={styles.imageUpload}
                name="profile_photo"
                accept="image/*"
                placeholder='photo'
                style={{ display: 'none' }}
                
                type="file"
                    
            />
        </>
    )
}




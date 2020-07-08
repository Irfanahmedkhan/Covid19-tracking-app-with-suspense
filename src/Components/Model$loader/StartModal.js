import React, { useState } from "react";

import Modal from "react-modal";

import dua from '../../picture/dua.jpg'
import pa from '../../picture/pa.jpg'




function StartModal() {

    const [symptoms, setsymptoms] = useState(false);


    return (
        <div>
            
            <Modal
                isOpen={symptoms}
                onRequestClose={() => setsymptoms(!true)}
                style={{
                    overlay: {
                        position: "fixed",

                        backgroundColor: "rgba(255, 255, 255, 0.75)",
                    }, alignItems: 'center',

                    content: {
                        position: "absolute",
                        top: "10px",
                        left: "250px",
                        right: "250px",
                        bottom: "10px",
                        border: "1px solid #ccc",
                        background: "#fff",
                        overflow: "auto",
                        WebkitOverflowScrolling: "touch",
                        borderRadius: "15px",
                        outline: "none",
                        padding: "20px",
                    },

                }}
            >
                <img src={pa} alt='dua' />
                <img src={dua} alt='dua' />
                
                <div>
                    <button
                        onClick={() => setsymptoms(!true)}
                        style={{
                            backgroundColor: "#e73d1f",
                            fontWeight: 600,
                            padding: "10px",
                            borderRadius: "5px",
                        }}
                    >
                        Close
          </button>
                </div>
            </Modal>


        </div>
    )
}

export default StartModal

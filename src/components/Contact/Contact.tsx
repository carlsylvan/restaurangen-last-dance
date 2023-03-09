import styled from "styled-components";

const Textarea = styled.textarea`
  width: 70vw;
  height: 40vh;
`;

export const Contact = () => {
    return (
        <>
        <h1>LAST DANCE</h1>
        <h2>RESTAURANG</h2>
        <h3>Kontakta oss</h3>
        <form>
            <div>
                <label>Namn</label>
                <input type="text" required />
            </div>
            <div>
                <label>Email</label>
                <input type="email"required />
            </div>
            <div>
                <label>Bokningsnummer</label>
                <input type="text" required />
            </div>
            <div>
                <label>Meddelande</label>
                <Textarea required></Textarea>
            </div>
            <button type="submit">Send</button>
        </form>
        </>
    )
};
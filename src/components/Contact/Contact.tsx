import styled from "styled-components";

const Textarea = styled.textarea`
  width: 70vw;
  height: 40vh;
`;

export const Contact = () => {
    return (
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
                <label>Meddelande</label>
                <Textarea required></Textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    )
};
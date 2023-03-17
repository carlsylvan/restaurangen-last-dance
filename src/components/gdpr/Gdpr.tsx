import { GdprInputWrapper, GdprWrapper } from "../styled/Wrappers"

interface IGdprProps {
    changeGdprStatus(): void
}
export const Gdpr = (props:IGdprProps) => {

    const handleChange = () => {
        
        props.changeGdprStatus();
    }
    return (
        <>
            <p>Vi samlar in ditt namn och din e-postadress för att bekräfta din bordsbokning och skicka dig ett bekräftelsemail. Genom att klicka på “Jag godkänner” samtycker du till vår användning av din personliga information som beskrivs i vår integritetspolicy. Du kan ändra dina preferenser eller dra tillbaka ditt samtycke när som helst.</p>
            <GdprInputWrapper >
                <label htmlFor="gdpr">Jag godkänner</label>
                <input onChange={handleChange} type="checkbox" id="gdpr"/>
            </GdprInputWrapper>
        </>
    )

}
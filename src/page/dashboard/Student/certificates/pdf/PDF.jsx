/* eslint-disable react/prop-types */
import { Page, Text, Image, Document, View } from '@react-pdf/renderer';
import './pdf.css'
function PDF({anotherName}) {
  console.log('another name is ------->', anotherName);
 
    return (
        <Document>
            <Page size="A4">
                <View style={{ position: 'relative', overflow: 'hidden' }}>
                    <Text style={{ position: "absolute", top: '395px', right: 0, left: 110, zIndex: 1, fontSize: '60px', textTransform: 'capitalize', fontWeight: 'bold' }} >{anotherName}</Text>
                    <Image src='https://i.ibb.co/N6gZBXk/certificate.png' style={{ width: '600', height: '800', zIndex: 3 }} />
                </View>
            </Page>
        </Document>
    )
}
export default PDF

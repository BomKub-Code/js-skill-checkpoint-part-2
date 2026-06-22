// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        const filteredData = data.filter(user => user.name.length > 17)
                                 .map(user => user.name); 
        console.log(filteredData); //console.log([ '${filteredData.join("', '")}' ]);
        // console.log จะแสดงเป็นแนวตั้งเนื่องจากพื้นที่ไม่พอหากต้องบังคับให้แสดงแนวนอนให้ใช้ console.log comment ด้านบน 
    } catch (error) {
        console.log('error fetch data', error.message);
    }
}

getUsers() // [ 'Mrs. Dennis Schulist', 'Nicholas Runolfsdottir V', 'Clementina DuBuque' ]

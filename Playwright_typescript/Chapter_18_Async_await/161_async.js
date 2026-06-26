    async function testapi() {

        try {
            let result=await Promise.resolve("503 reject");

        }
            catch(error) {
                console.log(error);
            }
            finally {
                console.log("api call completed");
            }
    }

    testapi();
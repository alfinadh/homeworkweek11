test("test using toBe", () => {
    let name = "NodeJS";
    let greeting = 'Hello ${name}'

    expect(greeting).toBe("Hello ${name}")
})


test("test using toEquals", () => {
    let frameworkJS = {id: "N1"}
    Object.assign(frameworkJS, {name: "NodeJS"})

    expect(frameworkJS).toEqual({id: "N1", name: "NodeJS"})
})
test("array", () => {
    const frameworkJS = ("ExpressJS", "Hapi", "Koa")
    expect(frameworkJS).toContain("Koa")
    expect(frameworkJS).toEqual("Koa")
    
    const unitTestingLibrary = [{title: "Jest"}, {title: "Mocha"}]
    expect(unitTestingLibrary).toContainEqual({title: "Jest"})
    expect(unitTestingLibrary).toEqual([{title: "Jest"}, {title: "Mocha"}])

})
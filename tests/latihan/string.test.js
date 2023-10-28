test("string", () => {
    const frameworkJS = "NodeJS"

    expect(frameworkJS).toBe("NodeJS")
    expect(frameworkJS).toEqual("NodeJS")
    expect(frameworkJS).toMatch(/ode/)
})
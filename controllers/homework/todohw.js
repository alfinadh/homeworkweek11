const listAllTodo = async (req, res) => {
    const todo = await Todo.findAll();
    res.json(todo);
};

const getTodoById = async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
        res.json(todo);
    } else { 
        res.status(400).json({message: 'Data Tidak Ditemukan'});
    }
};

const createTodo = async (req, res) => {
    const {title} = req.body;
    if (!title) {
        res.status(400).json({message: 'Title Diperlukan'});
    } else {
        const todo = await Todo.create({title});
        res.status(201).json(todo);
    }
};

const deleteTodo = async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
        await todo.destroy();
        res.json({ message: 'Data Telah Dihapus'});
    } else {
        res.status(400).json({message: 'Data Tidak Ditemukan'});
    }
};

module.exports = {
    listAllTodo,
    getTodoById,
    createTodo,
    deleteTodo,
};
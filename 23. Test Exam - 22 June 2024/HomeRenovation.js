class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`
        }

        this.tasks.push({ description, cost, priority });
        this.budget -= cost;

        return `The task '${description}' has been successfully added to the renovation plan.`
    }

    markTaskAsCompleted(description) {
        let currentTask = this.tasks.find(task => task.description == description);

        if (currentTask) {
            this.tasks = this.tasks.filter(task => task.description != description);
            this.completedTasks.push(currentTask);
            return `The task '${description}' has been successfully completed.`
        }

        throw new Error(`Task '${description}' not found in the renovation plan.`);
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative."
        }

        let priorityTasks = this.tasks.filter(task => task.priority >= minimalPriority);

        if (!priorityTasks.length) {
            return `No tasks found with priority ${minimalPriority} or higher.`
        }

        return `You have ${priorityTasks.length} tasks to prioritize.`
    }

    renovationSummary() {
        if (!this.completedTasks.length) {
            throw new Error("No tasks have been completed yet!")
        }

        let buff = `Budget left $${this.budget}.`
        buff += `\nYou have completed ${this.completedTasks.length} tasks.`
        buff += "\nPending tasks in the renovation plan:"
        this.tasks.map(task => buff += `\n${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`);

        return buff;
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());





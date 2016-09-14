/**
  * @module FouleFactoryApiLib
  *  
  * TODO Enter a description
  */

var configuration = require('./configuration'),
    TaskAnswerTextsController = require('./Controllers/TaskAnswerTextsController'),
    TaskAnswerChoicesController = require('./Controllers/TaskAnswerChoicesController'),
    ProjectsController = require('./Controllers/ProjectsController'),
    CsvFilesController = require('./Controllers/CsvFilesController'),
    AccountController = require('./Controllers/AccountController'),
    TemplatesController = require('./Controllers/TemplatesController'),
    TasksController = require('./Controllers/TasksController'),
    TaskLinesController = require('./Controllers/TaskLinesController'),
    AccountWriterServiceModel = require('./Models/AccountWriterServiceModel'),
    PayinServiceModel = require('./Models/PayinServiceModel'),
    CsvFileWriterServiceModel = require('./Models/CsvFileWriterServiceModel'),
    ProjectWriterServiceModel = require('./Models/ProjectWriterServiceModel'),
    TaskLinesWriterServiceModel = require('./Models/TaskLinesWriterServiceModel'),
    TaskValidationWriterServiceModel = require('./Models/TaskValidationWriterServiceModel'),
    TemplateNewWriterServiceModel = require('./Models/TemplateNewWriterServiceModel'),
    TemplateInstructionWriterServiceModel = require('./Models/TemplateInstructionWriterServiceModel'),
    TemplateColumnWriterServiceModel = require('./Models/TemplateColumnWriterServiceModel'),
    TemplateQuestionWriterServiceModel = require('./Models/TemplateQuestionWriterServiceModel');


function initializer(){}

//Main functional components of FouleFactoryApiLib
initializer.configuration = configuration;
initializer.TaskAnswerTextsController = TaskAnswerTextsController;
initializer.TaskAnswerChoicesController = TaskAnswerChoicesController;
initializer.ProjectsController = ProjectsController;
initializer.CsvFilesController = CsvFilesController;
initializer.AccountController = AccountController;
initializer.TemplatesController = TemplatesController;
initializer.TasksController = TasksController;
initializer.TaskLinesController = TaskLinesController;

//Main Models of FouleFactoryApiLib
initializer.AccountWriterServiceModel = AccountWriterServiceModel;
initializer.PayinServiceModel = PayinServiceModel;
initializer.CsvFileWriterServiceModel = CsvFileWriterServiceModel;
initializer.ProjectWriterServiceModel = ProjectWriterServiceModel;
initializer.TaskLinesWriterServiceModel = TaskLinesWriterServiceModel;
initializer.TaskValidationWriterServiceModel = TaskValidationWriterServiceModel;
initializer.TemplateNewWriterServiceModel = TemplateNewWriterServiceModel;
initializer.TemplateInstructionWriterServiceModel = TemplateInstructionWriterServiceModel;
initializer.TemplateColumnWriterServiceModel = TemplateColumnWriterServiceModel;
initializer.TemplateQuestionWriterServiceModel = TemplateQuestionWriterServiceModel;

module.exports = initializer;
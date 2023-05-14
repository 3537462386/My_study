"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const testUser = {
    name: 'test-user-name',
    password: '111111'
};
describe('测试创建用户接口', () => {
    test('创建用户时必须提供用户名', async () => {
        const response = await (0, supertest_1.default)(app_1.default)
            .post('/users')
            .send({ password: testUser.password });
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ message: '请提供用户名' });
    });
});
//# sourceMappingURL=user.test.js.map
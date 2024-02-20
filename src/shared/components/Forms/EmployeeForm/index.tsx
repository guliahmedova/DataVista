import { EmployeeFormType, ITeamFormType } from "@/shared/models";
import utils from "@/styles/utils.module.scss";
import { EmployeesFormScheme } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Form, Input, Row, Select, SelectProps } from "antd";
import { useForm } from "react-hook-form";

const options: SelectProps['options'] = [
    {
        label: 'Trs',
        value: 'Trs'
    },
    {
        label: 'Joe',
        value: 'Joe'
    }
];

const EmployeeForm: React.FC<ITeamFormType> = ({ okText, okBtnColor, actionKey }) => {
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };

    const { register, handleSubmit, formState: { errors } } = useForm<EmployeeFormType>({ resolver: zodResolver(EmployeesFormScheme) });

    const submitData = (data: EmployeeFormType) => {
        console.log(data);
    };

    return (
        <Form layout='vertical' onFinish={handleSubmit(submitData)}>
            <Row gutter={6}>
                <Col span={12}>
                    <Form.Item label="First Name" name="firstName">
                        <Input size="large" {...register("firstName")} name="firstName"  />
                    </Form.Item>
                    {errors.firstName && <span className={utils.err_msg}>{errors.firstName.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Last Name" name="lastName">
                        <Input size="large"  {...register("lastName")} name="lastName" />
                    </Form.Item>
                    {errors.lastName && <span className={utils.err_msg}>{errors.lastName.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Email" name="email">
                        <Input size="large"  {...register("email")} name="email" />
                    </Form.Item>
                    {errors.email && <span className={utils.err_msg}>{errors.email.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Password" name="password">
                        <Input size="large"  {...register("password")} name="password" />
                    </Form.Item>
                    {errors.password && <span className={utils.err_msg}>{errors.password.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Teams" name="teamID">
                        <Select
                            {...register("teamID")}
                            size="large"
                            mode="multiple"
                            allowClear
                            placeholder="Please select"
                            onChange={handleChange}
                            options={options}
                        />
                    </Form.Item>
                    {errors.teamID && <span className={utils.err_msg}>{errors.teamID.message}</span>}
                </Col>
                <Col span={12}>
                    <Form.Item label="Roles" name="roleID">
                        <Select
                            {...register("roleID")}
                            size="large"
                            mode="multiple"
                            allowClear
                            placeholder="Please select"
                            onChange={handleChange}
                            options={options}
                        />
                    </Form.Item>
                    {errors.roleID && <span className={utils.err_msg}>{errors.roleID.message}</span>}
                </Col>
                {actionKey === 'EMPLOYEE_UPDATE' && (
                    <Col span={12}>
                        <Form.Item label="Status" name="status">
                            <Select
                                {...register("status")}
                                size="large"
                                mode="multiple"
                                allowClear
                                placeholder="Please select"
                                onChange={handleChange}
                                options={options}
                            />
                        </Form.Item>
                        {errors.status && <span className={utils.err_msg}>{errors.status.message}</span>}
                    </Col>
                )}
                <Col span={24} className={utils.btns_placement}>
                    <Button style={{ backgroundColor: `${okBtnColor}`, color: 'white' }} htmlType="submit">{okText}</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default EmployeeForm;
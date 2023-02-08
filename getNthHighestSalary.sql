CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE nth INT DEFAULT N-1;
    RETURN (
        select distinct salary 
        from Employee 
        order by salary DESC 
        limit 1 offset nth  
    );
END
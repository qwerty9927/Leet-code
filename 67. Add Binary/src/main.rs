fn main() {
    fn add_binary(a: String, b: String) -> String {
        let mut result = String::new();
        let mut carry = 0;

        let a_array: Vec<char> = a.chars().collect();
        let b_array: Vec<char> = b.chars().collect();

        let mut i = a_array.len() as i32 - 1;
        let mut j = b_array.len() as i32 - 1;

        while i >= 0 || j >= 0 || carry > 0 {
            let mut sum = carry;

            if i >= 0 {
                sum += a_array[i as usize].to_digit(2).unwrap();
                i -= 1;
            }

            if j >= 0 {
                sum += b_array[j as usize].to_digit(2).unwrap();
                j -= 1;
            }

            result.push(((sum % 2) as u8 + b'0') as char);
            carry = sum / 2;
        }

        result.chars().rev().collect()
    }

    println!("Result: {}", add_binary("11".to_string(), "11".to_string()));
}

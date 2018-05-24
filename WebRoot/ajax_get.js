function createXMLHttp(){
	var xmlHttp;
	try{
		xmlHttp=new XmlHttpRequest();
		
	}
	catch(e){
	try{ // Internet Explorer
             xmlHttp=new ActiveXObject("Msxml2.XMLHTTP"); // �ͼ��汾��IE
        } catch (e){
            try{
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP"); // �ϸ߼��汾��IE
            } catch (e) {

            }
        }
    }
    return xmlHttp;
	
}

function ajax_get() {
    // 1.�����첽����
    var xhr = createXMLHttp();
    // 2.����״̬�ı�ļ������ᴥ��һ���������ú���ͨ������֮Ϊ�ص�����
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // �����ͳɹ�
            if (xhr.status == 200) { // ��ӦҲ�ɹ�
                // �����Ӧ������
                var data = xhr.responseText;
                // ����ҳ�����������д�뵽div��
                document.getElementById("d1").innerHTML = data;
            }
        }
    }
    // 3.���������·��
    // �����js����д��jspҳ���У���ô�Ϳ���ֱ��ʹ��${pageContext.request.contextPath }������EL���ʽ�ˣ�
    // ��������ǵ���дһ��js�ļ����Ͳ���ʹ��${pageContext.request.contextPath }������EL���ʽ�ˡ�
    // ��������·��ҪдΪ/AjaxProject/ServletDemo1������������ʽ
    xhr.open("GET", "/TestAjax/ServletDemo1", true);
    // 4.��������û�����������дnull
    xhr.send(null);
}

function ajax_get1(){
	var xhr=createXMLHttp();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var data=xhr.responseText;
				document.getElementById("d1").innerHTML=data;
			}
		}
	}
	xhr.open("GET", "/TestAjax/ServletDemo2?name=aaa&&pwd=123", true);
	// 4.��������û�����������дnull
    // ע�⣺��GET��ʽ����Ĳ�������д��send�������棬��Ӧд�������·������
	 xhr.send(null);
}

function ajax_post() {
    // 1.�����첽����
    var xhr = createXMLHttp();
    // 2.����״̬�ı�ļ������ᴥ��һ���������ú���ͨ������֮Ϊ�ص�����
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // �����ͳɹ�
            if (xhr.status == 200) { // ��ӦҲ�ɹ�
                // �����Ӧ������
                var data = xhr.responseText;
                // ����ҳ�����������д�뵽div��
                document.getElementById("d1").innerHTML = data;
            }
        }
    }
    // 3.���������·��
    // �����js����д��jspҳ���У���ô�Ϳ���ֱ��ʹ��${pageContext.request.contextPath }������EL���ʽ�ˣ�
    // ��������ǵ���дһ��js�ļ����Ͳ���ʹ��${pageContext.request.contextPath }������EL���ʽ�ˡ�
    // ��������·��ҪдΪ/AjaxProject/ServletDemo1������������ʽ
    xhr.open("post", "/TestAjax/ServletDemo1", true);
     // ��POST��ʽ�ύ��ʱ��Ҫ����һ������ͷ
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 4.��������û�����������дnull
    xhr.send(null);
}

function ajax_post1() {
    // 1.�����첽����
    var xhr = createXMLHttp();
    // 2.����״̬�ı�ļ������ᴥ��һ���������ú���ͨ������֮Ϊ�ص�����
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // �����ͳɹ�
            if (xhr.status == 200) { // ��ӦҲ�ɹ�
                // �����Ӧ������
                var data = xhr.responseText;
                // ����ҳ�����������д�뵽div��
                document.getElementById("d1").innerHTML = data;
            }
        }
    }
    // 3.���������·��
    // �����js����д��jspҳ���У���ô�Ϳ���ֱ��ʹ��${pageContext.request.contextPath }������EL���ʽ�ˣ�
    // ��������ǵ���дһ��js�ļ����Ͳ���ʹ��${pageContext.request.contextPath }������EL���ʽ�ˡ�
    // ��������·��ҪдΪ/AjaxProject/ServletDemo1������������ʽ
    xhr.open("post", "/TestAjax/ServletDemo2", true);
     // ��POST��ʽ�ύ��ʱ��Ҫ����һ������ͷ
    
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // 4.��������û�����������дnull
    xhr.send("name=aaa&pwd=123");
}